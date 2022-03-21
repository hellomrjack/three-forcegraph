const three = global.THREE;

import ForceGraph from './forcegraph-kapsule.js';
import fromKapsule from './utils/kapsule-class.js';

export default fromKapsule(ForceGraph, three.Group, true);
