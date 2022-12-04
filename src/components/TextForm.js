import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const HandleUpCase = () =>{
        setText(text.toUpperCase())
    }
    const HandleDownCase = () =>{
        setText(text.toLowerCase())
    }
    const HandleOnChange = (event) =>{
        setText(event.target.value)
    }
    const [text,setText]=useState("Feed The Text Here")
    return (
        <div>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="TextArea" value={text} onChange={HandleOnChange} rows="8"></textarea>
            </div>
            <div className="conatiner my-2">
                <button className="btn btn-success me-4" onClick={HandleUpCase}>Upar ke Case me Daab Isse</button>
                <button className="btn btn-danger" onClick={HandleDownCase}>Neeche ke Case Me Daab isko </button>
            </div>
            <div className="container my-3">
                <h1> Lekh ka Saransh  </h1>
                <p> {text.split(" ").length-1} words and {text.length} charcters and {text.split(". ").length -1} sentence</p>
                <h2>Jo likha hai dekle </h2>
                <p>{text}</p>
            </div>
        </div>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string,
}
TextForm.defaultProps = { title: 'Set Title Here', about: 'Set about Here', link: 'Set link Here', home: 'Set home Here' }
