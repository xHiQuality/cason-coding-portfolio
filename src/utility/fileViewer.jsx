import fileContent from '../readfiles/kotlinosp.txt';

export default function FileViewer() {
    return (
        <div>
            <pre>{fileContent}</pre>
        </div>
    )
}