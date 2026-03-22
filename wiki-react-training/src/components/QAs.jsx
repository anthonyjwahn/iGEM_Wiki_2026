
function QAs ({question, answer, isOpen, onToggle}) {

    return (
        <div className='qadiv' onClick={onToggle} style={{ cursor: 'pointer' }}>
            <div class='qdiv' >
                <h2 className='q' >{question}</h2>
                <span>{isOpen ? '−' : '+'}</span>
            </div>
            {isOpen && (<p>{answer}</p>)}
        </div>
    );
}

export default QAs;