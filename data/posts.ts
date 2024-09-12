type Post = {
  id: number;
  title: string;
  content: string;
};

export const posts: { [key: number]: Post } = {
  2: {
    id: 2,
    title: "안녕하세요.",
    content: "",
  },
  1: {
    id: 1,
    title: "Hello, World!",
    content: "",
  },
};

posts[1].content = `
# 안녕
## 잘가
`.trim();

posts[2].content = `
# 안녕하세요.
## 잘가세요.

\`\`\`c
#include <stdio.h>

int main() {
  printf("Hello, World!\\n");
  return 0;
}
\`\`\`
`.trim();
