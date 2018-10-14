import DynamicImport from '../../components/dynamic-import';
import React from 'react';

export default (props) => (
    <DynamicImport load={() => import('../../modules/about')}>
        {(Component) => Component === null
            ? <p>Loading</p>
            : <Component {...props} />}
    </DynamicImport>
);