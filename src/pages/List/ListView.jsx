const ListView = ({ handleClick }) => {
  return (
    <div className="">
      <button onClick={handleClick}>Bana tıkla</button>
      <h1>gönderi Sayısı</h1>
      <div>
        <div>post</div>
        <div>post</div>
        <div>post</div>
      </div>
    </div>
  );
};

export default ListView;
