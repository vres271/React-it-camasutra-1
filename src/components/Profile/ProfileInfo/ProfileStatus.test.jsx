import { render, screen } from '@testing-library/react';
import { create } from 'react-test-renderer';
import TestRenderer from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';


describe('ProfileStatus component', ()=>{

    test('After creation <span> with right status should be displayed',()=>{
        const root = TestRenderer.create(<ProfileStatus status="it-camasutra" />).root;
        const span = root.findByType('span');
        expect(span).not.toBeNull();
    })

    test('After creation <span> with right status should be displayed',()=>{
        const root = TestRenderer.create(<ProfileStatus status="it-camasutra" />).root;
        const span = root.findByType('span');
        expect(span.children[0]).toBe("it-camasutra");
    })

    test('After creation <input> should not be displayed',()=>{
        const root = TestRenderer.create(<ProfileStatus status="it-camasutra" />).root;
        expect(()=>root.findByType('input')).toThrow();
    })

    test('Input should be dispalayed in edit mode instead of span',()=>{
        const root = TestRenderer.create(<ProfileStatus status="it-camasutra"  />).root;
        const span = root.findByType('span');
        span.props.onDoubleClick();
        const input = root.findByType('input')
        expect(input.props.value).toBe("it-camasutra");
        expect(()=>root.findByType('span')).toThrow();
    })

    test('Callback should be called',()=>{
        const mockCallback = jest.fn()
        const component = TestRenderer.create(<ProfileStatus status="it-camasutra" updateUserStatus={mockCallback} />);
        const instance = component.getInstance()
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    })
    
})