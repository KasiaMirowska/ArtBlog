import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import Code from './src/components/Code';

const components = {
    h2: ({ children }) => (
        <h2 style={{ color: 'rebeccapurple' }}>{children}</h2>
    ),
    'p.inlineCode': props => (
        <code style={{ backgroundColor: 'black' }} {...props} />
    ),

    pre: ({ children: { props } }) => {
        if (props.mdxType === 'code') {
            return (
                <Code
                    codeString={props.children.trim()}
                    language={
                        props.className && props.className.replace('language-', '')
                    }
                    {...props}
                />
            );
        }
    }
};

export const wrapRootElement = (props) => {
    console.log('WTF???',MDXProvider, 'SEPARATE', props)
    return (
        <MDXProvider child={components}>{props.element}</MDXProvider>
    )
};

// import { MDXProvider } from '@mdx-js/react';
// import Highlight, { defaultProps } from 'prism-react-renderer';
// import theme from 'prism-react-renderer/themes/nightOwl';
// import React from 'react';

// const components = {
//   pre: props => {
//     const className = props.children.props.className || '';
//     const matches = className.match(/language-(?<lang>.*)/);

//     return (
//       <Highlight
//         {...defaultProps}
//         code={props.children.props.children.trim()}
//         language={
//           matches && matches.groups && matches.groups.lang
//             ? matches.groups.lang
//             : ''
//         }
//         theme={theme}>
//         {({
//           className,
//           style,
//           tokens,
//           getLineProps,
//           getTokenProps,
//         }) => (
//           <pre className={className} style={style}>
//             {tokens.map((line, i) => (
//               <div {...getLineProps({ line, key: i })}>
//                 {line.map((token, key) => (
//                   <span {...getTokenProps({ token, key })} />
//                 ))}
//               </div>
//             ))}
//           </pre>
//         )}
//       </Highlight>
//     );
//   },
// };

// export const wrapRootElement = ({ element }) => {
//     console.log('in wrap')
//     return (
//   <MDXProvider components={components}>{element}</MDXProvider>
// )};