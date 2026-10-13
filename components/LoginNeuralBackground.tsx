const nodes=[
  [40,75],[160,42],[248,115],[75,228],[192,260],[305,205],[355,80],
  [28,430],[152,394],[274,466],[355,350],[60,635],[195,705],[320,615],
  [430,755],[310,860],[100,820],[485,40],[620,95],[790,38],
  [925,92],[1070,45],[1225,115],[1370,40],[1010,235],[1160,250],
  [1320,218],[1400,340],[1115,410],[1275,440],[995,550],[1190,610],
  [1365,570],[1055,735],[1220,800],[1385,740],[920,855],[730,805],[560,870],
];
const edges=[
  [0,1],[0,3],[1,2],[1,6],[2,4],[2,5],[2,6],[3,4],[3,7],[4,5],
  [4,8],[5,10],[6,17],[7,8],[7,11],[8,9],[8,10],[9,10],[9,13],
  [11,12],[11,16],[12,13],[12,15],[12,16],[13,14],[14,15],[14,38],
  [15,16],[17,18],[18,19],[19,20],[20,21],[20,24],[21,22],[22,23],
  [22,25],[22,26],[23,26],[24,25],[24,28],[25,26],[25,28],[26,27],
  [27,29],[28,29],[28,30],[28,31],[29,31],[29,32],[30,31],[30,33],
  [31,32],[31,33],[31,34],[32,35],[33,34],[33,36],[34,35],[34,36],
  [36,37],[37,38],
];

function Network({portrait=false}:{portrait?:boolean}) {
  const scale=portrait?1/3:1;
  return <svg className={portrait?"neural-portrait":"neural-landscape"} viewBox={portrait?"0 0 480 900":"0 0 1440 900"} preserveAspectRatio="xMidYMid slice" focusable="false">
    <g className="neural-connections" fill="none" stroke="currentColor" strokeWidth=".8">
      {edges.map(([a,b])=><line key={`${a}-${b}`} x1={nodes[a][0]*scale} y1={nodes[a][1]} x2={nodes[b][0]*scale} y2={nodes[b][1]}/>)}
    </g>
    <g className="neural-nodes" fill="currentColor">
      {nodes.map(([x,y],i)=><circle key={i} cx={x*scale} cy={y} r={i%5===0?3:1.7}/>)}
    </g>
  </svg>;
}
export function LoginNeuralBackground() {
  return <div className="login-neural-background" aria-hidden="true"><Network/><Network portrait/></div>;
}
