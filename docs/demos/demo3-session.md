# Demo 3：Session 与记忆

最小 JSONL 格式示例：

```json
{"role":"user","content":"帮我总结 README"}
{"role":"assistant","tool_call":{"name":"read_file","args":{"path":"README.md"}}}
{"role":"tool","content":"..."}
{"role":"assistant","content":"总结如下..."}
```

要点：

- 每条事件 append-only，便于回放和调试
- 支持分支（branch）可实现“从某轮继续探索”
