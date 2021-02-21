import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import App from "../App";

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />,{eyes: {tag:String(({name, kind, parameters}, baseUrl) => {
                                                                                                            const variationUrlParam = parameters && parameters.eyes && parameters.eyes.variationUrlParam;
                                                                                                            const variation = variationUrlParam ? `&eyes-variation=${variationUrlParam}` : '';

                                                                                                            return `${baseUrl}/iframe.html?selectedKind=${encodeURIComponent(
                                                                                                              kind,
                                                                                                            )}&selectedStory=${encodeURIComponent(name)}&eyes-storybook=true${variation}`;
                                                                                                          }  }}  ));
//{eyes: {tag: ({name, kind, parameters}) => {return test(name) }}}
//storiesOf('Button', module)
//  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//  .add('with some emoji', () => (
//    <Button onClick={action('clicked')}>
//      <span role="img" aria-label="so cool">
//        😀 😎 👍 💯
//      </span>
//    </Button>
//  ));
//tag: ({name, kind, parameters}) => {return test(name) }
//
//  storiesOf('App', module).add('default', () => <App />);

//({name, kind, parameters}) => {return test(name) }

//({name, kind, parameters}, baseUrl) => {
//  const variationUrlParam = parameters && parameters.eyes && parameters.eyes.variationUrlParam;
//  const variation = variationUrlParam ? `&eyes-variation=${variationUrlParam}` : '';
//
//  return `${baseUrl}/iframe.html?selectedKind=${encodeURIComponent(
//    kind,
//  )}&selectedStory=${encodeURIComponent(name)}&eyes-storybook=true${variation}`;
//}