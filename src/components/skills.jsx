import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Skills() {
  return (
    <div>
    <CardGroup style={{margin:"10px"}}>
      <Card style={{margin:"20px"}}>
        <Card.Img variant="top" src="https://blog.hyperiondev.com/wp-content/uploads/2018/09/Blog-Article-MERN-Stack.jpg" />
        <Card.Body>
          <Card.Title>MERN Stack</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{margin:"20px"}}>
        <Card.Img variant="top" href="https://leetcode.com/ykv749/" src="https://leetcode.com/static/images/LeetCode_Sharing.png" />
        <Card.Body>
          <Card.Title>Competitive Programming</Card.Title>
          <Card.Text>
            {"Contest Attended: 60 \n Problems Solved: 750 \n Highest Rating: 1853 ( Knight Badge 🏇🏼 Top 5% ) \n Best Ranking: 1325"}
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
  );
}

export default Skills;