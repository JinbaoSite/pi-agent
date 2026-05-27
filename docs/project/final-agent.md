# 教学版目标项目：Mini Pi Agent（TS）

## 项目目录建议

```text
mini-pi-agent/
  apps/
    web/              # React 前端
    server/           # Node.js 后端
  packages/
    agent-core/
    llm-adapter/
    tool-kit/
    session-store/
```

## 后端核心代码骨架（Node + TS）

```ts
export async function runAgent(task: string) {
  const messages = [{ role: 'user', content: task }]
  for (let turn = 0; turn < 8; turn++) {
    const out = await llm.generate(messages, toolRegistry.specs())
    if (out.type === 'final') return out.answer
    if (out.type === 'tool_call') {
      const r = await toolRegistry.invoke(out.name, out.args)
      messages.push({ role: 'tool', content: JSON.stringify(r) })
    }
  }
  return '未在限制轮次内完成任务。'
}
```

## 前端最小交互

- 输入任务
- 轮询或 SSE 显示 Agent 中间步骤
- 最终答案与工具轨迹可视化
