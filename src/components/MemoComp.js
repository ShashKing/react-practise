import React from 'react'

function MemoComp({name}) {
    console.log("Render Function or Memo")
    return (
        <div>
            Memo Component {name}
        </div>
    )
}

export default React.memo(MemoComp)
