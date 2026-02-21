function Universe({ imgURL, imgDescription }) {
  return (
    <div 
      style={{ 
        textAlign: "center",
        padding: "10px",
      }}
    >
      <img
        src={imgURL}
        alt=""
        style={{
          width: "110px",
          height: "auto",
          marginBottom: "10px",
          objectFit: "contain"
        }}
      />

      <p style={{ 
        fontSize: "14px",
        color: "#555",
        lineHeight: "20px",
        maxWidth: "250px",
        margin: "0 auto"
      }}>
        {imgDescription}
      </p>
    </div>
  );
}

export default Universe;