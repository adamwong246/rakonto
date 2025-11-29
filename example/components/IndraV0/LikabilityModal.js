import React, { useState, useContext, useEffect } from 'react';
import { Modal, Button, Row } from 'react-bootstrap';
import { BackendContext } from './Backend.js';
import { LikabilitySection } from './LikabilitySection.js';
import { MetricSection } from './MetricSection.js';
import { AllScoresList } from './AllScoresList.js';
import { ActionButtons } from './ActionButtons.js';

export function LikabilityModal({ show, onHide, postId, userLikabilityScore, setUserLikabilityScore, averageLikability, setAverageLikability }) {
    const backend = useContext(BackendContext);
    const [score, setScore] = useState(userLikabilityScore || 0);
    const [allScores, setAllScores] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    
    // New metrics states
    const [factScore, setFactScore] = useState(50);
    const [humanScore, setHumanScore] = useState(50);
    const [truthScore, setTruthScore] = useState(50);
    const [adultnessScore, setAdultnessScore] = useState(50);
    const [userFactScore, setUserFactScore] = useState(50);
    const [userHumanScore, setUserHumanScore] = useState(50);
    const [userTruthScore, setUserTruthScore] = useState(50);
    const [userAdultnessScore, setUserAdultnessScore] = useState(50);

    useEffect(() => {
        if (show) {
            setScore(userLikabilityScore || 0);
            fetchAllScores();
            fetchCurrentUser();
            // In a real app, you'd fetch these from the backend
            setFactScore(Math.floor(Math.random() * 101));
            setHumanScore(Math.floor(Math.random() * 101));
            setTruthScore(Math.floor(Math.random() * 101));
            setAdultnessScore(Math.floor(Math.random() * 101));
        }
    }, [show, userLikabilityScore, postId]);

    const fetchCurrentUser = async () => {
        try {
            const user = await backend.getCurrentUser();
            setCurrentUser(user);
        } catch (error) {
            console.error('Error fetching current user:', error);
        }
    };

    const fetchAllScores = async () => {
        try {
            const scores = await backend.getLikabilityScores(postId);
            setAllScores(scores);
            // Update average
            if (scores.length > 0) {
                const avg = scores.reduce((sum, ls) => sum + ls.score, 0) / scores.length;
                setAverageLikability(Math.round(avg));
            } else {
                setAverageLikability(0);
            }
        } catch (error) {
            console.error('Error fetching likability scores:', error);
        }
    };

    const handleSetScore = async () => {
        try {
            await backend.setLikabilityScore(postId, currentUser.uid, score);
            setUserLikabilityScore(score);
            await fetchAllScores();
        } catch (error) {
            console.error('Error setting likability score:', error);
        }
    };

    const handleSetAllScores = async () => {
        // In a real app, you'd save all user ratings to the backend
        // For now, we'll just show an alert
        alert('All ratings saved! (Fact: ' + userFactScore + ', Human: ' + userHumanScore + 
              ', Truth: ' + userTruthScore + ', Adultness: ' + userAdultnessScore + ')');
    };

    return (
        <Modal show={show} onHide={onHide} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Post Assessment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <LikabilitySection 
                        averageLikability={averageLikability}
                        score={score}
                        onScoreChange={(e) => setScore(parseInt(e.target.value))}
                        scoreMessage={getLikabilityMessage(averageLikability)}
                        color={getMetricColor(averageLikability)}
                    />
                    <MetricSection 
                        title="Fact vs Fiction"
                        score={factScore}
                        userScore={userFactScore}
                        onUserScoreChange={(e) => setUserFactScore(parseInt(e.target.value))}
                        scoreMessage={factScore >= 50 ? 'Mostly Factual' : 'Mostly Fictional'}
                        color={getMetricColor(factScore)}
                    />
                </Row>
                <Row>
                    <MetricSection 
                        title="Human vs AI"
                        score={humanScore}
                        userScore={userHumanScore}
                        onUserScoreChange={(e) => setUserHumanScore(parseInt(e.target.value))}
                        scoreMessage={humanScore >= 50 ? 'Likely Human' : 'Likely AI'}
                        color={getMetricColor(humanScore)}
                    />
                    <MetricSection 
                        title="Truthful vs Deceptive"
                        score={truthScore}
                        userScore={userTruthScore}
                        onUserScoreChange={(e) => setUserTruthScore(parseInt(e.target.value))}
                        scoreMessage={truthScore >= 50 ? 'Mostly Truthful' : 'Mostly Deceptive'}
                        color={getMetricColor(truthScore)}
                    />
                </Row>
                <Row>
                    <MetricSection 
                        title="Adultness"
                        score={adultnessScore}
                        userScore={userAdultnessScore}
                        onUserScoreChange={(e) => setUserAdultnessScore(parseInt(e.target.value))}
                        scoreMessage={adultnessScore >= 50 ? 'Adult Content' : 'Child-Friendly'}
                        color={getMetricColor(adultnessScore)}
                    />
                </Row>
                
                <ActionButtons 
                    onSaveAllRatings={handleSetAllScores}
                    onSetLikability={handleSetScore}
                    userLikabilityScore={userLikabilityScore}
                />
                
                <AllScoresList allScores={allScores} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

function getMetricColor(score) {
    if (score >= 80) return '#28a745';
    if (score >= 60) return '#17a2b8';
    if (score >= 40) return '#ffc107';
    if (score >= 20) return '#fd7e14';
    return '#dc3545';
}

function getLikabilityMessage(score) {
    if (score >= 80) return 'Very well-liked!';
    if (score >= 60) return 'Quite popular.';
    if (score >= 40) return 'Average engagement.';
    if (score >= 20) return 'Could use more attention.';
    return 'Needs more love.';
}
