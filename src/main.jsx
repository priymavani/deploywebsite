import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Realme from './realme.jsx'
// .jsx javascript
// .tsc typescript
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Realme/>
    
  </StrictMode>,
)
