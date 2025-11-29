import { IndraV0 } from '../components/IndraV0.js';
import { BackendContext, backend } from '../components/IndraV0/Backend.js';

import Story from "../../story.js";

Story(
  <BackendContext.Provider value={backend}>
            <div>
                <IndraV0 />
            </div>
        </BackendContext.Provider>
);
