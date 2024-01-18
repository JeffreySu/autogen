"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[751],{7386:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var s=t(5893),r=t(1151);const a={sidebar_label:"agent",title:"agentchat.agent"},i=void 0,c={id:"reference/agentchat/agent",title:"agentchat.agent",description:"Agent Objects",source:"@site/docs/reference/agentchat/agent.md",sourceDirName:"reference/agentchat",slug:"/reference/agentchat/agent",permalink:"/autogen/docs/reference/agentchat/agent",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/agentchat/agent.md",tags:[],version:"current",frontMatter:{sidebar_label:"agent",title:"agentchat.agent"},sidebar:"referenceSideBar",previous:{title:"text_analyzer_agent",permalink:"/autogen/docs/reference/agentchat/contrib/text_analyzer_agent"},next:{title:"assistant_agent",permalink:"/autogen/docs/reference/agentchat/assistant_agent"}},l={},d=[{value:"Agent Objects",id:"agent-objects",level:2},{value:"__init__",id:"__init__",level:4},{value:"name",id:"name",level:4},{value:"send",id:"send",level:4},{value:"a_send",id:"a_send",level:4},{value:"receive",id:"receive",level:4},{value:"a_receive",id:"a_receive",level:4},{value:"reset",id:"reset",level:4},{value:"generate_reply",id:"generate_reply",level:4},{value:"a_generate_reply",id:"a_generate_reply",level:4}];function o(e){const n={code:"code",em:"em",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"agent-objects",children:"Agent Objects"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Agent()\n"})}),"\n",(0,s.jsx)(n.p,{children:"(In preview) An abstract class for AI agent."}),"\n",(0,s.jsxs)(n.p,{children:["An agent can communicate with other agents and perform actions.\nDifferent agents can differ in what actions they perform in the ",(0,s.jsx)(n.code,{children:"receive"})," method."]}),"\n",(0,s.jsx)(n.h4,{id:"__init__",children:"__init__"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def __init__(name: str)\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"})," ",(0,s.jsx)(n.em,{children:"str"})," - name of the agent."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"name",children:"name"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"@property\ndef name()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Get the name of the agent."}),"\n",(0,s.jsx)(n.h4,{id:"send",children:"send"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def send(message: Union[Dict, str],\n         recipient: "Agent",\n         request_reply: Optional[bool] = None)\n'})}),"\n",(0,s.jsx)(n.p,{children:"(Abstract method) Send a message to another agent."}),"\n",(0,s.jsx)(n.h4,{id:"a_send",children:"a_send"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'async def a_send(message: Union[Dict, str],\n                 recipient: "Agent",\n                 request_reply: Optional[bool] = None)\n'})}),"\n",(0,s.jsx)(n.p,{children:"(Abstract async method) Send a message to another agent."}),"\n",(0,s.jsx)(n.h4,{id:"receive",children:"receive"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def receive(message: Union[Dict, str],\n            sender: "Agent",\n            request_reply: Optional[bool] = None)\n'})}),"\n",(0,s.jsx)(n.p,{children:"(Abstract method) Receive a message from another agent."}),"\n",(0,s.jsx)(n.h4,{id:"a_receive",children:"a_receive"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'async def a_receive(message: Union[Dict, str],\n                    sender: "Agent",\n                    request_reply: Optional[bool] = None)\n'})}),"\n",(0,s.jsx)(n.p,{children:"(Abstract async method) Receive a message from another agent."}),"\n",(0,s.jsx)(n.h4,{id:"reset",children:"reset"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def reset()\n"})}),"\n",(0,s.jsx)(n.p,{children:"(Abstract method) Reset the agent."}),"\n",(0,s.jsx)(n.h4,{id:"generate_reply",children:"generate_reply"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def generate_reply(messages: Optional[List[Dict]] = None,\n                   sender: Optional["Agent"] = None,\n                   **kwargs) -> Union[str, Dict, None]\n'})}),"\n",(0,s.jsx)(n.p,{children:"(Abstract method) Generate a reply based on the received messages."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"messages"})," ",(0,s.jsx)(n.em,{children:"list[dict]"})," - a list of messages received."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sender"})," - sender of an Agent instance."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"str or dict or None: the generated reply. If None, no reply is generated."}),"\n",(0,s.jsx)(n.h4,{id:"a_generate_reply",children:"a_generate_reply"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'async def a_generate_reply(messages: Optional[List[Dict]] = None,\n                           sender: Optional["Agent"] = None,\n                           **kwargs) -> Union[str, Dict, None]\n'})}),"\n",(0,s.jsx)(n.p,{children:"(Abstract async method) Generate a reply based on the received messages."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"messages"})," ",(0,s.jsx)(n.em,{children:"list[dict]"})," - a list of messages received."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sender"})," - sender of an Agent instance."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"str or dict or None: the generated reply. If None, no reply is generated."})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var s=t(7294);const r={},a=s.createContext(r);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);