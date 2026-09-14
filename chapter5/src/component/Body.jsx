import './Body.css'

const Body = () => {
    let[text, setText] = useState('');
    const handleOnChange = (e) => {
        setText(e.target.value); // 리렌더링
        // text = e.target.value; // 리렌더링 x
    }
    return (
        <div class="body">
            <input onChange = {handleOnChange} />
            <div>{text}</div>
        </div>
    );
}

export default Body;