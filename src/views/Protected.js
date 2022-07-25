import React from "react"

const Protected = () => {
  return (<div>
    <h1>This is a protected route, users must authenticate with Auth0 to access this view</h1>
  </div>
)}
export default Protected