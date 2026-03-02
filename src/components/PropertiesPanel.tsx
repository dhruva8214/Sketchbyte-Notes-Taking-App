import React from 'react';
import { useToolStore } from '../store/toolStore';

const COLORS = [
    '#ffffff', '#a78bfa', '#60a5fa', '#34d399', '#fbbf24',
    '#f472b6', '#fb923c', '#ef4444', '#e5e7eb', '#6b7280',
    '#1e1b4b', '#0f2035', '#052e1c', '#transparent',
];

const PropertiesPanel: React.FC = () => {
    const {
        strokeColor, fillColor, strokeWidth, roughness, opacity, fontSize,
        setStrokeColor, setFillColor, setStrokeWidth, setRoughness, setOpacity, setFontSize,
    } = useToolStore();

    return (
        <div className="properties-panel">
            <div className="prop-section">
                <label className="prop-label">Stroke Color</label>
                <div className="color-grid">
                    {COLORS.filter(c => c !== '#transparent').map(color => (
                        <button
                            key={color}
                            className={`color-swatch ${strokeColor === color ? 'active' : ''}`}
                            style={{ background: color }}
                            onClick={() => setStrokeColor(color)}
                            title={color}
                        />
                    ))}
                </div>
                <input
                    type="color"
                    className="color-input"
                    value={strokeColor}
                    onChange={e => setStrokeColor(e.target.value)}
                    id="stroke-color-picker"
                />
            </div>

            <div className="prop-section">
                <label className="prop-label">Fill Color</label>
                <div className="fill-buttons">
                    <button
                        className={`fill-btn ${fillColor === 'transparent' ? 'active' : ''}`}
                        onClick={() => setFillColor('transparent')}
                        id="fill-none"
                    >
                        None
                    </button>
                    <input
                        type="color"
                        className="color-input"
                        value={fillColor === 'transparent' ? '#000000' : fillColor}
                        onChange={e => setFillColor(e.target.value)}
                        id="fill-color-picker"
                    />
                </div>
                <div className="color-grid">
                    {COLORS.slice(0, 8).map(color => (
                        <button
                            key={`fill-${color}`}
                            className={`color-swatch ${fillColor === color ? 'active' : ''}`}
                            style={{ background: color }}
                            onClick={() => setFillColor(color)}
                            title={color}
                        />
                    ))}
                </div>
            </div>

            <div className="prop-section">
                <label className="prop-label">Stroke Width: {strokeWidth}px</label>
                <input
                    type="range" min={1} max={20} step={1}
                    value={strokeWidth}
                    onChange={e => setStrokeWidth(Number(e.target.value))}
                    className="prop-slider"
                    id="stroke-width-slider"
                />
            </div>

            <div className="prop-section">
                <label className="prop-label">Roughness: {roughness.toFixed(1)}</label>
                <input
                    type="range" min={0} max={3} step={0.1}
                    value={roughness}
                    onChange={e => setRoughness(Number(e.target.value))}
                    className="prop-slider"
                    id="roughness-slider"
                />
            </div>

            <div className="prop-section">
                <label className="prop-label">Opacity: {Math.round(opacity * 100)}%</label>
                <input
                    type="range" min={0.1} max={1} step={0.05}
                    value={opacity}
                    onChange={e => setOpacity(Number(e.target.value))}
                    className="prop-slider"
                    id="opacity-slider"
                />
            </div>

            <div className="prop-section">
                <label className="prop-label">Font Size: {fontSize}px</label>
                <input
                    type="range" min={8} max={72} step={2}
                    value={fontSize}
                    onChange={e => setFontSize(Number(e.target.value))}
                    className="prop-slider"
                    id="font-size-slider"
                />
            </div>

            <div className="prop-shortcuts">
                <div className="shortcut-title">Keyboard Shortcuts</div>
                <div className="shortcut-row"><span>V</span><span>Select</span></div>
                <div className="shortcut-row"><span>H</span><span>Pan</span></div>
                <div className="shortcut-row"><span>P</span><span>Pencil</span></div>
                <div className="shortcut-row"><span>R</span><span>Rectangle</span></div>
                <div className="shortcut-row"><span>C</span><span>Circle</span></div>
                <div className="shortcut-row"><span>L</span><span>Line</span></div>
                <div className="shortcut-row"><span>A</span><span>Arrow</span></div>
                <div className="shortcut-row"><span>T</span><span>Text</span></div>
                <div className="shortcut-row"><span>E</span><span>Eraser</span></div>
                <div className="shortcut-row"><span>Ctrl+Z</span><span>Undo</span></div>
                <div className="shortcut-row"><span>Del</span><span>Delete</span></div>
            </div>
        </div>
    );
};

export default PropertiesPanel;
