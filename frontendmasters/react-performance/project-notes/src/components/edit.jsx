import updateNote from '../lib/update-note';

const Editing = ({ note, setNotes }) => {
  return (
    <section className="flex h-full w-full flex-col rounded-br-2xl bg-white p-8">
      <label htmlFor="edit-note-title" className="mb-4 block">
        <span className="block">Title</span>
        <input
          id="edit-note-title"
          className="w-full"
          value={note.title}
          name="title"
          onChange={(e) =>
            setNotes(updateNote(note.id, e.target.name, e.target.value))
          }
        />
      </label>
      <label htmlFor="edit-note-content" className="mb-4 block">
        <span className="block">Content</span>
        <textarea
          id="edit-note-content"
          className="w-full"
          value={note.content}
          name="content"
          onChange={(e) =>
            setNotes(updateNote(note.id, e.target.name, e.target.value))
          }
        />
      </label>
    </section>
  );
};

export default Editing;
