import DynamicImport from '../../components/dynamic-import';
import React from 'react';

export default (props) => (
    <DynamicImport load={() => import('../../components/about')}>
        {(Component) => Component === null
            ? <p>Loading</p>
            : <Component {...props} />}
    </DynamicImport>
);