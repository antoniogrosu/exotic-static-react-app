import Question from './Question'

export default function Questions(){
    const array = [{
        question:"Question 1?",
        response:"This is a basic response accordingly written in order to respond to the Question."
    },
    {
        question:"Question 2?",
        response:"This is a basic response accordingly written in order to respond to the Question."
    },
    {
        question:"Question 3?",
        response:"This is a basic response accordingly written in order to respond to the Question."
    }]

    const components = array.map((arr) => {
        return <Question  question={arr.question} response={arr.response} />
    })
    return(
        <div className="questions-div">
        <h1 className="heading black left">Frequently Asked Questions</h1>
       {components}
       </div>
    )
}