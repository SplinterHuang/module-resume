import React, {Component} from 'react';
// import testStyle from '../styles/module/test.module.scss'
import "../styles/common1.scss"
// import ResumeInfo from "../components/resumeWidgets/Info";
import {Info,Title} from "../components/resumeWidgets/Info";
import Page from "../components/resumeWidgets/Page"

// infoClass: {},   subtitle: {}, <   !--type: duration, -- >   displayType:
// withTitle,   titleStyleType: table, < !--optional-- >   item: [{     title:
// [{       cn,       en,       style     }, {       cn,       en,       style
//   }, ],   }]

const characterInfo = new Info({
  infoClass: "人物信息",
  displayType: "inline",
})
characterInfo.addItem({cn:"瓦里安·乌瑞恩"})
characterInfo.addItem({cn:"战士"})
characterInfo.addItem({cn:"暴风城国王"})
const characterBorn = new Info({
  infoClass: "生卒年",
  displayType: "inline",
})
characterBorn.addItem({cn:"生于黑门前10年"})
characterBorn.addItem({cn:"逝于黑门33年"})

const characterDesc = new Info({
  infoClass: "人物简介",
  displayType: "block",
})
characterDesc.addItem({
  cn: "他是人类七国之一——暴风城的国王。"
})
characterDesc.addItem({
  cn: "他即位时还是个不谙世事的孩子，亲眼目睹了父亲遇刺。在那不久之后，他眼睁睁地看着自己的王国被夷为平地，而他却不得不在安度因·洛萨的保护之下狼狈逃离，此后他历经磨难最终成长为了也许是人类历史上最伟大的战士和索拉丁大帝之后最伟大的人类国王。"
})
characterDesc.addItem({
  cn: "他就是乌瑞恩家族的杰出后嗣。他的童年寄居在别国的宫廷，同洛丹伦国王泰瑞纳斯·米奈希尔的孩子们一同长大，直到兽人部落被人类联盟击溃，而被其摧毁的暴风城重建完工为止。在这期间，他又失去了洛萨——他视为义父的传奇英雄。他的妻子在因重建工程款事件引发的暴乱中遇害，而这起暴乱的幕后是那些他曾视为亲密伙伴的人。他被黑龙诱骗，遭受了魔法的摧残，被撕裂成了两个独立的人。"
})
characterDesc.addItem({
  cn: "自从父亲莱恩·乌瑞恩死后，他就没有一刻是在平静中度过的——而今后似乎也不可能给他这样的机会。暴风城的国王，瓦里安·乌瑞恩的一生注定会充满了无数严峻的挑战。"
})
const characterExp = new Info({
  infoClass: "人物经历",
  displayType: "label",
})
characterExp.addItem({
  label: "-10",
  labelDescs:[
    {cn:'出生'},
    {cn:'王子诞辰'},
  ],
  contents:[
    {
      cn: "瓦里安·乌瑞恩，暴风王国的王子出生。",
    }
  ]
})
characterExp.addItem({
  label: "4",
  contents: [{
    cn: "安度因·洛萨知道暴风王国已经战败，带着瓦里安王子与剩下的国民们往北逃亡，第一次大战结束。",
  }]
})
characterExp.addItem({
  label: "5",
  contents: [{
    cn: "安度因·洛萨带领暴风王国的遗民与王子瓦里安·乌瑞恩北渡抵达洛丹伦王国，在国王泰瑞纳斯·米奈希尔的主导下七个人类王国组成联盟，以对抗部落为目标。",
  }]
})
characterExp.addItem({
  label: "7",
  contents: [{
    cn: "瓦里安带领遗民回到东部王国南方重建自己的暴风王国，登基为新国王。",
  }]
})
characterExp.addItem({
  label: "15",
  contents: [{
    cn: "瓦里安之子，安度因·乌瑞恩王子出生。",
  }]
})
characterExp.addItem({
  label: "24",
  contents: [{
    cn: "吉安娜邀请暴风王国国王瓦里安·乌瑞恩与部落大酋长萨尔参与高峰会，打算签订部落与联盟友好条约，但是瓦里安却在赴会的路上遭潜藏已久的黑龙奥妮克希亚设计绑架。",
  }, {
    cn: "奥妮克希亚将瓦里安用黑暗魔法分裂为二，其中一个脱逃之后被兽人雷加·大地之怒当做奴隶角斗士训练。",
  }, ]
})
characterExp.addItem({
  label: "26",
  contents: [{
    cn: "失去记忆的瓦里安·乌瑞恩成为竞技场角斗士季赛冠军，逃离了奴隶生涯，开始进行他的记忆追寻之旅。",
  }, {
    cn: "瓦里安·乌瑞恩在吉安娜和艾格文的帮助下恢复记忆，回归暴风王国取回自己的王位和揭发奥妮克希亚的真面目，接着带领大军攻入奥妮克希亚的巢穴，击杀黑龙公主。",
  }, {
    cn: "吉安娜邀请萨尔和瓦里安再度参与领袖高峰会，却被邪恶的食人魔古加尔派暮光之锤的刺客破坏，而真正目的是引诱出前守护者之子麦德安然后利用他的力量解放上古之神的封印，引发大灾难。",
  }, ]

})
characterExp.addItem({
  label: "27",
  contents: [{
    cn: " 幽暗城一战， 大酋长萨尔与被遗忘者女王希尔瓦娜斯击杀叛徒瓦里玛萨斯， 暴风国王瓦里安则成功的复仇解决普特雷斯， 但是联盟从此对部落正式开战。",
  }, ]
  
 
})
const titleInfo = new Title({
  cn:"瓦王"
})
const resumeInfo = {
  pageConfig: {},
  title: titleInfo,
  infos:[
    characterInfo,
    characterBorn,
    characterDesc,
    characterExp,
  ],
}
export default class Demo1 extends Component {
  render() {
    // page  resumeTitle
    //
    //  infoTitle    info [block, inline, label,resumeTitle]
    return (
      <Page resumeInfo={resumeInfo}>
        {/* <ResumeInfo info={titleInfo}></ResumeInfo>
        <ResumeInfo info={characterInfo}></ResumeInfo>
        <ResumeInfo info={characterBorn}></ResumeInfo>
        <ResumeInfo info={characterDesc}></ResumeInfo>
        <ResumeInfo info={characterExp}></ResumeInfo> */}

      </Page>
    );
  }
}

// export default function Demo1