interface Props {
    title: string,
    description: string
}

export default function PageDescription(props: Props) {
    return (
        <>
            <div className="text-left mb-5">
                <h1 className="text-2xl font-bold">{props.title}</h1>
                <p className="text-lg">{props.description}</p>
            </div>
        </>
    );
}
