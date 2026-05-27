# Demo 1：最小 Agent Loop

目标：不接工具，只完成“多轮思考直到回答”。

```ts
for (let i = 0; i < maxTurns; i++) {
  const out = await llm.generate(messages)
  messages.push(out.message)
  if (out.type === 'final') return out.answer
}
throw new Error('max turns reached')
```

> 关键点：先把 loop 跑通，再加工具。

**练习**

1. 增加 `maxTurns` 防止死循环。
2. 增加 `debug trace` 输出每一轮状态。
