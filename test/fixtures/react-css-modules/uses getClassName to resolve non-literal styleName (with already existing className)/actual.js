import bar from './bar.css';
import './foo.css';

const styleNameBar = 'bar.a-b';
const styleNameFoo = 'a-b';

<div styleName={styleNameBar}></div>;
<div className='global' styleName={styleNameFoo}></div>;
