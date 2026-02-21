import React, { useState } from 'react';

const Apps = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const apps = [
    {
      name: 'Streak',
      category: 'algo',
      description: 'Create & deploy algo trading strategies without coding',
      icon: '⚡',
      rating: 4.5,
      users: '50K+',
      color: '#6366f1',
      features: ['No coding required', 'Backtesting', 'Live deployment']
    },
    {
      name: 'Smallcase',
      category: 'investment',
      description: 'Ready-made portfolio of stocks & ETFs',
      icon: '📊',
      rating: 4.3,
      users: '1M+',
      color: '#3b82f6',
      features: ['Curated portfolios', 'Rebalancing', 'Tax harvesting']
    },
    {
      name: 'Sensibull',
      category: 'options',
      description: 'Options trading & strategy builder',
      icon: '🎯',
      rating: 4.6,
      users: '100K+',
      color: '#f97316',
      features: ['Strategy builder', 'Live Greeks', 'P&L analysis']
    },
    {
      name: 'ChartIQ',
      category: 'charting',
      description: 'Advanced charting with 100+ indicators',
      icon: '📈',
      rating: 4.4,
      users: '80K+',
      color: '#10b981',
      features: ['100+ indicators', 'Drawing tools', 'Multi-timeframe']
    },
    {
      name: 'Dhan',
      category: 'trading',
      description: 'Super-fast order execution platform',
      icon: '⚡',
      rating: 4.2,
      users: '30K+',
      color: '#ef4444',
      features: ['Fast execution', 'Options chain', 'MTF trading']
    },
    {
      name: 'TradingView',
      category: 'charting',
      description: 'Professional charting & social trading',
      icon: '📉',
      rating: 4.7,
      users: '500K+',
      color: '#8b5cf6',
      features: ['Social trading', 'Pine Script', 'Multi-asset']
    },
    {
      name: 'Quantsapp',
      category: 'options',
      description: 'Options strategy backtesting & analysis',
      icon: '🔬',
      rating: 4.5,
      users: '25K+',
      color: '#ec4899',
      features: ['Backtesting', 'Greeks analyzer', 'Strategy finder']
    },
    {
      name: 'Coin',
      category: 'investment',
      description: 'Direct mutual fund investment platform',
      icon: '💰',
      rating: 4.4,
      users: '200K+',
      color: '#14b8a6',
      features: ['Zero commission', 'SIP automation', 'Tax reports']
    }
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'algo', name: 'Algo' },
    { id: 'investment', name: 'Investment' },
    { id: 'options', name: 'Options' },
    { id: 'charting', name: 'Charts' },
    { id: 'trading', name: 'Trading' }
  ];

  const filteredApps = apps.filter(app => {
    const matchesCategory = selectedCategory === 'all' || app.category === selectedCategory;
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          app.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fafafa', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#ff5722', color: 'white', padding: '12px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 14L14 0L14 9.33333L28 14L14 18.6667L14 28L0 14Z" fill="white"/>
            </svg>
            <div style={{ fontSize: '20px', fontWeight: '500', letterSpacing: '0.5px' }}>kite</div>
          </div>
          <div style={{ fontSize: '20px' }}>👤</div>
        </div>
        
        {/* Search Bar */}
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            placeholder="Search apps"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 12px',
              paddingLeft: '36px',
              border: 'none',
              borderRadius: '4px',
              fontSize: '14px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              outline: 'none'
            }}
          />
          <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', fontSize: '16px' }}>🔍</span>
        </div>
      </header>

      {/* Category Pills */}
      <div style={{ backgroundColor: 'white', borderBottom: '1px solid #e5e5e5', padding: '12px 16px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
        <div style={{ display: 'inline-flex', gap: '8px' }}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              style={{
                padding: '6px 16px',
                border: selectedCategory === category.id ? 'none' : '1px solid #d5d5d5',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: '500',
                backgroundColor: selectedCategory === category.id ? '#ff5722' : 'white',
                color: selectedCategory === category.id ? 'white' : '#666',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Info Banner */}
      <div style={{ backgroundColor: '#fff3e0', padding: '12px 16px', borderBottom: '1px solid #ffcc80' }}>
        <div style={{ display: 'flex', alignItems: 'start', gap: '10px' }}>
          <span style={{ fontSize: '18px', flexShrink: 0 }}>ℹ️</span>
          <div>
            <div style={{ fontSize: '13px', color: '#e65100', fontWeight: '500', marginBottom: '2px' }}>
              Connect third-party apps
            </div>
            <div style={{ fontSize: '12px', color: '#555', lineHeight: '1.4' }}>
              Apps that integrate with your Kite account for enhanced trading
            </div>
          </div>
        </div>
      </div>

      {/* Apps List */}
      <div style={{ padding: '0' }}>
        {filteredApps.map((app, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'white',
              borderBottom: '1px solid #f0f0f0',
              padding: '16px',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9f9f9'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
          >
            <div style={{ display: 'flex', gap: '12px' }}>
              {/* App Icon */}
              <div 
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '8px',
                  backgroundColor: app.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  flexShrink: 0
                }}
              >
                {app.icon}
              </div>

              {/* App Details */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: '500', color: '#333', margin: 0 }}>
                    {app.name}
                  </h3>
                  <span style={{ fontSize: '18px' }}>→</span>
                </div>
                
                <p style={{ 
                  fontSize: '13px', 
                  color: '#666', 
                  margin: '0 0 8px 0',
                  lineHeight: '1.4'
                }}>
                  {app.description}
                </p>

                {/* Rating & Users */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ color: '#ffa726', fontSize: '14px' }}>★</span>
                    <span style={{ fontSize: '12px', color: '#666' }}>{app.rating}</span>
                  </div>
                  <span style={{ fontSize: '12px', color: '#999' }}>•</span>
                  <span style={{ fontSize: '12px', color: '#666' }}>{app.users} users</span>
                </div>

                {/* Features */}
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {app.features.map((feature, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '11px',
                        padding: '3px 8px',
                        backgroundColor: '#f5f5f5',
                        color: '#666',
                        borderRadius: '3px',
                        border: '1px solid #e5e5e5'
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Empty State */}
        {filteredApps.length === 0 && (
          <div style={{ 
            textAlign: 'center', 
            padding: '60px 20px',
            backgroundColor: 'white'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
            <div style={{ fontSize: '15px', color: '#666', marginBottom: '8px' }}>No apps found</div>
            <div style={{ fontSize: '13px', color: '#999' }}>Try a different search or category</div>
          </div>
        )}
      </div>

      {/* Bottom Info */}
      <div style={{ 
        backgroundColor: '#fff9e6', 
        padding: '16px',
        borderTop: '1px solid #ffe082',
        marginTop: 'auto'
      }}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'start' }}>
          <span style={{ fontSize: '20px' }}>🔒</span>
          <div>
            <div style={{ fontSize: '13px', fontWeight: '500', color: '#333', marginBottom: '4px' }}>
              Your data is secure
            </div>
            <div style={{ fontSize: '12px', color: '#666', lineHeight: '1.4' }}>
              Third-party apps can only access limited data. You can revoke access anytime from settings.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;