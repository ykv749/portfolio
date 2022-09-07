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
            <div>Developed 4 Projects</div>
            <div>Realtime WebChat Application</div>
            <div>Task Manager NodeJS API</div>
            <div>Crypto Finance Tracker</div>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{margin:"20px"}}>
        <Card.Img variant="top" href="https://leetcode.com/ykv749/" src="https://leetcode.com/static/images/LeetCode_Sharing.png" />
        <Card.Body>
          <Card.Title>Competitive Programming</Card.Title>
          <Card.Text>
            <div>Contest Attended: 60</div>
            <div>Problems Solved: 750</div>
            <div>Highest Rating: 1853 ( Knight Badge 🏇🏼 Top 5% )</div>
            <div>Best Ranking: 1325</div>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
  );
}

export default Skills;