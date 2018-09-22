import DynamicImport from '../components/DynamicImport';
import React from 'react';

export default (props) => (
    <DynamicImport load={() => import('../containers/VisibleTodoList')}>
        {(Component) => Component === null
            ? <p>Loading</p>
            : <Component {...props} />}
    </DynamicImport>
);
