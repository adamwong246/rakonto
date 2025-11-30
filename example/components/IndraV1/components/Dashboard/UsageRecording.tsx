// import React from 'react';

// interface UsageEvent {
//   userId: string;
//   metric: 'posts' | 'storage' | 'apiCalls' | 'messages';
//   amount: number;
// }

// interface UsageRecordingProps {
//   usageEvent: UsageEvent;
//   onUsageEventChange: (event: UsageEvent) => void;
//   onRecordUsage: () => void;
//   loading: boolean;
// }

// // export const UsageRecording: React.FC<UsageRecordingProps> = ({
// //   usageEvent,
// //   onUsageEventChange,
// //   onRecordUsage,
// //   loading
// // }) => {
// //   return (
// //     <div className="usage-section">
// //       <h2>Record Usage</h2>
// //       <div className="form-group">
// //         <label>User ID:</label>
// //         <input 
// //           type="text" 
// //           value={usageEvent.userId} 
// //           onChange={(e) => onUsageEventChange({...usageEvent, userId: e.target.value})}
// //           placeholder="Enter user ID"
// //         />
// //       </div>
// //       <div className="form-group">
// //         <label>Metric:</label>
// //         <select 
// //           value={usageEvent.metric} 
// //           onChange={(e) => onUsageEventChange({...usageEvent, metric: e.target.value as any})}
// //         >
// //           <option value="posts">Posts</option>
// //           <option value="storage">Storage (bytes)</option>
// //           <option value="apiCalls">API Calls</option>
// //           <option value="messages">Messages</option>
// //         </select>
// //       </div>
// //       <div className="form-group">
// //         <label>Amount:</label>
// //         <input 
// //           type="number" 
// //           value={usageEvent.amount} 
// //           onChange={(e) => onUsageEventChange({...usageEvent, amount: Number(e.target.value)})}
// //           placeholder="Enter amount"
// //         />
// //       </div>
// //       <button onClick={onRecordUsage} disabled={loading}>
// //         {loading ? 'Recording...' : 'Record Usage'}
// //       </button>
// //     </div>
// //   );
// // };
