import axios from 'axios';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import testState from '../../stores/test/atom';
function CompletionPage() {
  const test = useRecoilValue(testState);

  axios.get('http://localhost:3001/surveys').then((res) => {
    console.log('res', res.data);
  });

  return <CompletionPageWrapper>{test}</CompletionPageWrapper>;
}

const CompletionPageWrapper = styled.div`
  background: aqua;
  padding: 4em;
`;

export default CompletionPage;
