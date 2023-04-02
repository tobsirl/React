import Editing from './edit';

const NoteContent = ({ note, setNotes, isEditing }) => {
  if (isEditing) return <Editing note={note} setNotes={setNotes} />;
  return (
    <div className="flex h-full flex-col gap-4 overflow-y-scroll p-4">
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </div>
  );
};

export default NoteContent;
