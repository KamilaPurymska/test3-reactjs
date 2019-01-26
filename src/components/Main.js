import React from 'react';

import Card from './Card';
import Puzzle from '../images/puzzle.svg'
import Lock from '../images/security-lock.svg'
import Alert from '../images/alert.svg'
import Cogos from '../images/cogs.svg'
import People from '../images/account-multiple.svg'

function Main() {
    return (
      <div className="main-container">
        <p className="title-main">How open banking technology can help your business</p>
        <div className="card-container">
          <Card
            image={Puzzle}
            title="Understand your client better"
            description="Know your client intimately through their financial data: what is their income,what do they spend money on, what are their consumption habits."
          />
          <Card
            image={Lock}
            title="Regulatory compliance and exposure"
            description="Our trusted 3rd party partners are fully compliant so you don't have to be. Let a third party hold funds securely for you and manage them with our APIs"
          />
          <Card
            image={People}
            title="Automatic AML and identity checks"
            description="Protect yourself from fraud by easily veryfying customers' identity, and checking them against the world's most extensive anti-money laundering databases "
          />
          <Card
            image={Alert}
            title="Better risk analysis"
            description="With access to your customer's account data, you can make better risk assessments and therefore better decisions."
          />
          <Card
            image={Cogos}
            title="Automation opportunities"
            description="Fully automate money movement procedures, identity checks, and account readings, reducing the need for human input."
          />
        </div>
      </div>
    );
}

export default Main;