const Subtitle = ({direction, title}) => {
    return <h2
        className={`my-10 text-xl bg-blue-500 text-white rounded-full py-3 px-5 transform ${direction == 'left' ? 'text-right  -translate-x-1/2 ' : 'text-left translate-x-1/3'}`}>{title}
    </h2>
}

export default Subtitle;