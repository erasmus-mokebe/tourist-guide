import SideComment from "../SideComment"

const comments = [
    {
        id: '1',
        name: 'David Sculptur',
        img: 'src/assets/img/face.jpg',
        date: '12 Jan',
        opinion: ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.s'
    },
    {
        id: '2',
        name: 'David Sculptur',
        img: 'src/assets/img/face.jpg',
        date: '12 Jan',
        opinion: ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.s'
    },
]


const CommentsList = () => (
    <>
    {comments.map(({id, img, name, date, opinion}) => <SideComment key={id} img={img} name={name} date={date} opinion={opinion}/>)}
    </>
)

export default CommentsList; 