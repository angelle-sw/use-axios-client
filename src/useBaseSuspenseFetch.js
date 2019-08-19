import axios from 'axios';
import { unstable_createResource as createResource } from './vendor/react-cache';

const Resource = createResource(async url => axios.get(url));

export default url => Resource.read(url);
