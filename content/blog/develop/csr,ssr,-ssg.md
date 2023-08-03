---
title: CSR, SSR, SSG

date: 2023-05-06 22:05:92

category: develop

thumbnail: { thumbnailSrc }

draft: false
---

![enter image description here](https://user-images.githubusercontent.com/52942411/236633927-4565e3ae-6e87-4715-9957-f62eb750b2ef.png)

회사에서 처음으로 **SSG** 렌더링 방식을 접하고 좀 얕게 지식을 가지고 있다가, 이번에 블로그 만들겸 해서 공부하게 되었습니다.

SSG의 렌더링 방식 하나를 설명하기 보다는 **CSR, SSR**도 같이 설명해보면 좋겠다고 생각되어 이와 같이 글을 쓰게 되었습니다 😀

## CSR은 무엇인가

CSR는 약자이며 명칭은 Client Side Rendering입니다. 현재 React, Vue, Angular에서 채택된 렌더링 방식입니다.

클라이언트에서 HTML을 그리며, JS가 동작하면서 필요한 데이터들을 주고 받아서 **클라이언트에서만 렌더링**을 하게 되는 방식을 뜻합니다.

CSR의 장점

- 초기 로딩 이후 페이지 전환이 빠르다.

- 서버의 부담을 줄일 수 있다 혹은 웹 서버를 띄울 필요가 없다.

CSR의 단점

- SEO에 좋지않다.

- 서버에서 html을 내려주는 것이 아니라 페이지 접속 시에 html을 그리는 것이기 때문에 검색 엔진 봇이 빈 html로 인식할 수 있기 때문

- 초기 로딩이 많이 걸린다.

- 첫 로딩시 html을 그리고, js를 불러와야 되기 때문

## SSR은 무엇인가

SSR은 약자이며 명칭은 Server Side Rendering입니다. 서버에서 먼저 사용자에게 보여줄 페이지를 그리고 내려주는 방식입니다.

첫 페이지에 도착하는 속도는 CSR보다 느릴 수 있지만, 화면이 구성되어 보여지는 시점은 더 빠릅니다.

왜냐하면 CSR은 페이지 접속 시 빈 HTML을 보여주고 그 후에 HTML을 다시 재구성하기 때문에, 보여지는 시점은 SSR이 더 빠르다고 할 수 있습니다.

SSR의 장점

- 첫 페이지 렌더링 속도가 빠르다.

- SEO에 좋다. - 이미 만들어진 html을 들고 있기 때문에 검색 엔진 봇이 크롤링이 가능하기 때문

SSR의 단점

- 페이지 이동시 지속적으로 서버에 요청하여 페이지 이동이 느리다.

- 추가적인 웹 서버를 띄어야 함.

## SSG는 무엇인가

SSG는 약자이며 명칭은 Static Site Generation입니다. build 시점에 미리 html과 css를 만드는 방식입니다.

**ISR**(Incremental Static Regeneration)이라는 개념도 있는데 이 개념도 SSG에 포함된다고 생각하시면 되겠습니다.

ISR은 build 시점에 페이지를 렌더링 한 후 설정한 시간마다 페이지를 새로 렌더링합니다. 그럼 어느정도의 동적으로도 사용가능해집니다.

백오피스를 만드는데 SSG의 렌더링 방식을 사용하여서 개발중입니다. 확실히 느낀점은 초기 렌더링은 CSR보다 빨라서 좋더라구요. 그리고 페이지 이동을 하여도 이미 만들어진 html과 css가 있기 때문에 느리지 않다고 좋다는 느낌을 많이 받았습니다.

현재 S3, Cloudfront, Route53을 통하여 배포하고, dynamic routing은 lambda@Edge를 사용하여 해결하고 있습니다.

![Group 15 (1)](https://github.com/jsh0128/jsh0128.github.io/assets/52942411/735e5b34-d2fd-4099-b8cb-8c995ea445ea)

**ISR을 도입 안한 이유는** 새로 만든 페이지를 프론트에서 지속적으로 들고있어야 하는데 이 페이지수가 적은 양도 아니였고, 이미 html과 css는 build시점에 만들었기 때문에 페이지 이동 속도 측면에서 느리지 않다고 판단했기 때문입니다.