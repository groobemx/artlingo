import * as React from 'react';

import Svg, { Path, SvgProps } from 'react-native-svg';

const Svg10 = (props: SvgProps) => (
  <Svg width={1000} viewBox="0 0 750 750" height={1000} {...props}>
    <Path
      fill="#bf8abc"
      d="M341.23 526.422c0 2.012-.05 4.02-.148 6.031a118.934 118.934 0 0 1-.445 6.012 118.719 118.719 0 0 1-.739 5.988 118.002 118.002 0 0 1-1.03 5.942c-.391 1.972-.833 3.933-1.321 5.882a118.365 118.365 0 0 1-1.61 5.813 121.21 121.21 0 0 1-4.063 11.355 123.665 123.665 0 0 1-2.44 5.512 123.918 123.918 0 0 1-5.684 10.637 121.572 121.572 0 0 1-3.23 5.093 120.253 120.253 0 0 1-3.473 4.93 121.234 121.234 0 0 1-3.707 4.758 125.03 125.03 0 0 1-8.098 8.934 118.637 118.637 0 0 1-4.37 4.156 121.828 121.828 0 0 1-9.321 7.652 123.112 123.112 0 0 1-37.527 18.89 125.484 125.484 0 0 1-11.696 2.93c-1.973.391-3.953.735-5.945 1.032-1.988.293-3.985.539-5.985.738a123.812 123.812 0 0 1-18.074.441 123.652 123.652 0 0 1-6.012-.441c-2.003-.2-4-.445-5.988-.738-1.988-.297-3.969-.64-5.941-1.032a125.477 125.477 0 0 1-11.696-2.93 121.235 121.235 0 0 1-5.726-1.894 121.153 121.153 0 0 1-11.14-4.613c-1.821-.86-3.618-1.766-5.391-2.71-1.774-.95-3.52-1.942-5.246-2.974a125.64 125.64 0 0 1-5.094-3.226 127.25 127.25 0 0 1-4.934-3.473c-1.613-1.199-3.199-2.437-4.754-3.71a125.03 125.03 0 0 1-8.933-8.098 125.402 125.402 0 0 1-4.16-4.368 124.923 124.923 0 0 1-3.938-4.566 121.329 121.329 0 0 1-3.71-4.758 120.255 120.255 0 0 1-3.474-4.93 125.64 125.64 0 0 1-3.226-5.093 123.978 123.978 0 0 1-5.684-10.637 123.73 123.73 0 0 1-2.445-5.512c-.77-1.86-1.492-3.734-2.172-5.629a122.88 122.88 0 0 1-4.82-17.422c-.39-1.972-.735-3.953-1.031-5.94-.293-1.993-.54-3.985-.739-5.99a123.652 123.652 0 0 1-.441-18.07c.098-2.011.246-4.015.441-6.015.2-2.004.446-3.996.739-5.988.296-1.989.64-3.97 1.03-5.942a122.88 122.88 0 0 1 9.438-28.563 123.978 123.978 0 0 1 5.684-10.637 125.64 125.64 0 0 1 3.227-5.093 120.255 120.255 0 0 1 3.472-4.93 125.045 125.045 0 0 1 7.648-9.324 125.402 125.402 0 0 1 4.16-4.367 125.03 125.03 0 0 1 8.934-8.098 128.229 128.229 0 0 1 4.754-3.71 127.25 127.25 0 0 1 4.934-3.473 125.64 125.64 0 0 1 5.094-3.227 128.292 128.292 0 0 1 5.246-2.972 124.062 124.062 0 0 1 10.902-5.157c1.86-.77 3.734-1.492 5.629-2.168a121.235 121.235 0 0 1 11.539-3.5c1.95-.488 3.91-.93 5.883-1.324 1.972-.39 3.953-.734 5.941-1.031a127.81 127.81 0 0 1 5.988-.738 123.652 123.652 0 0 1 18.07-.442c2.009.098 4.016.246 6.016.442 2 .199 3.997.445 5.985.738 1.992.297 3.972.64 5.945 1.031a125.484 125.484 0 0 1 11.695 2.93 122.74 122.74 0 0 1 5.727 1.894 121.907 121.907 0 0 1 11.14 4.613c1.817.86 3.614 1.766 5.387 2.712a123.112 123.112 0 0 1 15.273 9.672 121.828 121.828 0 0 1 9.32 7.652 118.637 118.637 0 0 1 4.372 4.156 125.292 125.292 0 0 1 4.156 4.367 125.153 125.153 0 0 1 3.942 4.57 118.271 118.271 0 0 1 3.707 4.755c1.2 1.613 2.355 3.257 3.473 4.93a125.727 125.727 0 0 1 3.23 5.093 123.918 123.918 0 0 1 5.684 10.637 123.665 123.665 0 0 1 4.613 11.14c.676 1.895 1.308 3.801 1.89 5.727.586 1.922 1.122 3.86 1.61 5.812.488 1.95.93 3.91 1.32 5.883.395 1.973.738 3.953 1.031 5.942.297 1.992.543 3.984.739 5.988.199 2 .347 4.004.445 6.016.098 2.007.148 4.015.148 6.027ZM648.11 587.86a61.425 61.425 0 0 1-1.184 11.984 60.142 60.142 0 0 1-1.465 5.851 60.937 60.937 0 0 1-2.031 5.676 60.855 60.855 0 0 1-2.578 5.45 61.14 61.14 0 0 1-6.691 10.016 60.808 60.808 0 0 1-4.048 4.464 60.919 60.919 0 0 1-4.468 4.05 60.385 60.385 0 0 1-4.844 3.59 60.694 60.694 0 0 1-5.168 3.102A61.44 61.44 0 0 1 592.69 649a60.79 60.79 0 0 1-6.023.297 60.77 60.77 0 0 1-6.02-.297 61.314 61.314 0 0 1-22.941-6.957 61.379 61.379 0 0 1-10.012-6.691 60.92 60.92 0 0 1-4.468-4.051 60.808 60.808 0 0 1-4.047-4.465 61.14 61.14 0 0 1-6.692-10.016 60.855 60.855 0 0 1-2.578-5.449c-.77-1.86-1.45-3.75-2.031-5.676a60.142 60.142 0 0 1-1.465-5.851 61.425 61.425 0 0 1-1.184-11.985 61.425 61.425 0 0 1 1.184-11.984 61.342 61.342 0 0 1 6.074-16.977 61.14 61.14 0 0 1 6.691-10.016 60.808 60.808 0 0 1 4.048-4.464 60.92 60.92 0 0 1 4.468-4.05 61.379 61.379 0 0 1 38.973-13.945c2.016-.001 4.02.097 6.023.296a61.314 61.314 0 0 1 28.11 10.058 60.385 60.385 0 0 1 4.844 3.59 60.919 60.919 0 0 1 4.468 4.051 60.808 60.808 0 0 1 4.047 4.465 61.14 61.14 0 0 1 6.692 10.015 61.342 61.342 0 0 1 6.074 16.977 61.425 61.425 0 0 1 1.183 11.984Zm0 0"
    />
    <Path
      fill="#81a9dd"
      d="M258.23 516.977a40.92 40.92 0 0 1 .567 15.968 40.933 40.933 0 0 1-2.055 7.762 41.107 41.107 0 0 1-3.531 7.211 41.088 41.088 0 0 1-2.277 3.312 42.308 42.308 0 0 1-2.594 3.075 41.073 41.073 0 0 1-6.02 5.309 40.473 40.473 0 0 1-3.375 2.187 40.589 40.589 0 0 1-3.57 1.847 41.1 41.1 0 0 1-11.547 3.332c-1.328.18-2.664.293-4.004.34-1.34.047-2.68.032-4.02-.054a40.324 40.324 0 0 1-7.925-1.286 41.182 41.182 0 0 1-7.524-2.804 40.616 40.616 0 0 1-3.52-1.946 40.71 40.71 0 0 1-3.308-2.277 38.95 38.95 0 0 1-3.074-2.594 40.643 40.643 0 0 1-5.312-6.02 42.495 42.495 0 0 1-2.188-3.37 41.107 41.107 0 0 1-3.332-7.305 41.543 41.543 0 0 1-1.117-3.863 42.146 42.146 0 0 1-.73-3.953 42.895 42.895 0 0 1-.34-4.004c-.047-1.34-.028-2.68.054-4.02a40.95 40.95 0 0 1 1.29-7.926c.34-1.296.745-2.574 1.218-3.828a41.075 41.075 0 0 1 1.586-3.695 41.578 41.578 0 0 1 1.941-3.516 41.289 41.289 0 0 1 4.871-6.387 40.645 40.645 0 0 1 2.883-2.8 40.511 40.511 0 0 1 3.141-2.508 41.145 41.145 0 0 1 10.676-5.523 41.178 41.178 0 0 1 7.812-1.844 40.472 40.472 0 0 1 4.008-.34c1.34-.047 2.68-.031 4.02.055a40.377 40.377 0 0 1 7.925 1.285c1.293.344 2.57.75 3.828 1.219a40.527 40.527 0 0 1 7.211 3.53 40.776 40.776 0 0 1 9.188 7.75 41.267 41.267 0 0 1 2.508 3.142 41.145 41.145 0 0 1 4.035 6.941 42.704 42.704 0 0 1 1.488 3.734 41.52 41.52 0 0 1 1.113 3.864ZM238.832 280.98v103.637c31.031 4.348 58.648 18.93 79.746 39.719h145.215V280.98Zm0 0"
    />
    <Path fill="#6f92bf" d="M361.398 280.98h102.395v143.356H361.398Zm0 0" />
    <Path
      fill="#f2f2f2"
      d="M218.355 464.984c-33.824 0-61.437 27.618-61.437 61.438 0 33.82 27.613 61.437 61.437 61.437 33.82 0 61.438-27.617 61.438-61.437 0-33.82-27.617-61.438-61.438-61.438Zm0 81.918c-11.171 0-20.48-9.308-20.48-20.48s9.309-20.48 20.48-20.48c11.168 0 20.477 9.308 20.477 20.48s-9.309 20.48-20.477 20.48Zm0 0"
    />
    <Path
      fill="#f2f2f2"
      d="M607.148 508.426v-84.399H504.754V280.98h81.914v-40.957H238.832V76.191H95.48v40.957h102.395v267.47C128.371 394.546 75 454.124 75 526.112c0 81.606 68.883 147.696 151.422 143.043 72.918-4.035 131.562-63.61 134.976-136.84.93-24.203-4.035-47.164-13.652-67.332h218.445v43.442c-35.062 9.308-61.437 40.957-61.437 79.125 0 47.164 39.715 85.02 87.5 81.605 39.719-2.793 72.3-34.441 75.71-74.16 4.036-41.578-23.269-76.64-60.816-86.57Zm-388.793 120.39c-56.472 0-102.398-45.921-102.398-102.394 0-56.473 45.926-102.395 102.398-102.395 56.473 0 102.395 45.922 102.395 102.395-.309 56.473-45.922 102.394-102.395 102.394Zm245.438-204.789H318.578c-21.41-20.789-49.027-35.062-79.746-39.718V280.98h225.273v143.047Zm122.875 204.79c-22.648 0-40.957-18.305-40.957-40.958 0-22.652 18.309-40.957 40.957-40.957 22.652 0 40.96 18.305 40.96 40.957 0 22.34-18.616 40.957-40.96 40.957Zm0 0"
    />
  </Svg>
);
export default Svg10;
