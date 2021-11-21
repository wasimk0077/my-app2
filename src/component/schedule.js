import './schedule.css'
const VerticalTimeline = (props) => {
    const { data } = props;
    const items = data.map((item, index) => {
      const { title, body, background, link } = item;
      const __background = `url("${background}")`;
      let anchor, destination;
      if(link) {
        ({ anchor, destination } = link);
      }
      return( 
        <TimelineItem
          key={index}
          index={index}
          title={title}
          body={body}
          backgroundImage={__background}
          linkAnchor={anchor}
          linkDestination={destination}
        />
      );
    });
    return <div className="vertical-timeline">{items}</div>;
  }
  
  const TimelineItem = (props) => {
    const {
      index,
      title,
      body,
      backgroundImage,
      linkAnchor,
      linkDestination
    } = props;
    const cls = `vertical-timeline--item ${index % 2 !== 0 ? 'right' : ''}`;
    return(
      <div className={cls}>
        <div className="vertical-timeline--badge"></div>
        <div className="vertical-timeline--content" style={{ backgroundImage }}>
          <h3>{title}</h3>
          <p>{body}</p>
          <a href={linkDestination}>{linkAnchor}</a>
        </div>
      </div>
    );
  }
  
  const data = [
    {
      title: 'Lorem Ipsum',
      body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      background: 'http://pornoundpiano.de/img/thumbs/tatwerk-thumb.jpg',
        
    },
    {
      title: 'Lorem Ipsum',
      body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    },{
      title: 'Lorem Ipsum',
      body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
     
    }
  ];
  
  const App = () => {
    return <VerticalTimeline data={data} />;
  }
  export default App;
  