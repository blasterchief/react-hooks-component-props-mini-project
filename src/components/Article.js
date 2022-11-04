import React from 'react';

function Article({minutesProp, title, preview, date="January 1, 1970"}) {
    return (
    <article>
        <h3>{title}</h3>
        <small>{date}{minutesToRead(minutesProp)}</small>
        <p>{preview}</p>
    </article>)
function minutesToRead(minutesProp) {
    if (minutesProp > 30)
        {
    return (tenMinuteTally(minutesProp))}
    else {return fiveMinuteTally(minutesProp)}
}
function tenMinuteTally(minutesProp) {
    const minCounterTens = minutesProp / 10
    return `     •${"🍱".repeat(minCounterTens)}  ${minutesProp} minute read`
}
function fiveMinuteTally(minutesProp) {
    const minCounterFives = minutesProp / 5
    return `     •${"☕️".repeat(minCounterFives)}  ${minutesProp} minute read`
}
}

export default Article

//Minutes to read