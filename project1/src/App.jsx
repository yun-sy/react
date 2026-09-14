import Viewer from './component/Viewer.jsx';
import Controller from './component/Controller.jsx';
import Even from './component/Even.jsx';
import './App.css';
import { useRef, useEffect, useState } from 'react';


function App() {
    console.log('App 렌더링');
    const didMountRef = useRef(false);
    // count: state변수, setCount: setter함수
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    // 이벤트핸들러: setCount함수를 호출하는 함수
    const handleSetCount = (value) => {
        setCount(count + value);
    };
    const handleChangeText = (e) => {
        setText(e.target.value);
    }

    useEffect(() => {
        if (!didMountRef.current) {
            didMountRef.current = true;
            return;
        } else {
            console.log("컴포넌트 업데이트!");
        }

    }); // useEffect(콜백, 의존성배열): 의존성 배열에 있는 값이 변경될 때마다 콜백함수 실행

    useEffect(() => {
        console.log("컴포넌트 마운트")
    }, []); // 의존성 배열이 비어있으면 마운트 될 때만 실행;

    return (
        <>
            <div className="App">
                <h1>Simple Counter</h1>
                <section>
                    <input value = {text} onChange={handleChangeText}/>
                </section>
                <section>
                    <Viewer count={count} />
                    {count % 2 === 0 && <Even />}
                </section>
                <section>
                    <Controller handleSetCount={handleSetCount} />
                </section>
            </div>
        </>
    );
}

export default App;
