function Loading({size}) {
  return (
      <div className="card-body text-center">
          <div className="spinner-border text-dark" role="status" style={size&&{width:size,height:size}}></div>
      </div>
  );
}

export default Loading;