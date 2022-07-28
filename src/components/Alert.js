import React from 'react'


function Alert(props) {

    const capatalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.Alert && <div>
            <div className={`alert alert-${props.Alert.typ} alert-dismissible fade show`} role="alert">
                <strong> {capatalize(props.Alert.typ)}</strong> :{props.Alert.msg}
               
            </div>
        </div>
    )
}
export default Alert