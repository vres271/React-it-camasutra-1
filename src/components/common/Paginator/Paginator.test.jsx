import TestRenderer from 'react-test-renderer';
import { Paginator } from './Paginator';


describe('Paginator component', ()=>{

    test('pages count is 11, but should be only 10',()=>{
        const root = TestRenderer.create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} />).root;
        const spans = root.findAllByType('span');
        expect(spans.length).toBe(10);
    })

    test('if pages count more then 10, next button should be present',()=>{
        const root = TestRenderer.create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} />).root;
        const next = root.findAllByProps({className: "next"});
        expect(next.length).toBe(1);
    })

    
})