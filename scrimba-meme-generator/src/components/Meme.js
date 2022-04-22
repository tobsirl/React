export default function Meme() {
  return (
    <main>
      <div className="form">
        <input type="text" className="form--input" placeholder="Top text" />
        <input type="text" className="form--input" placeholder="Bottom text" />
        <button className="form--button">Get a new meme image 🖼</button>
      </div>
    </main>
  );
}
