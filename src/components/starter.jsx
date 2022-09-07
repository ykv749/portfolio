import Card from 'react-bootstrap/Card';

function ImgOverlay() {
  return (
    <Card className="bg-dark text-white" style={{margin:"25px"}}>
      <Card.Img src="https://images.hdqwalls.com/wallpapers/assassins-creed-origins-bayek-4k-1y.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title style={{fontSize:"50px"}}>Yash Kumar Verma</Card.Title>
        <Card.Text style={{fontSize:"25px"}}>
          MERN Stack Developer | Competitive Programmer
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlay;