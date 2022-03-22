import { memo, useMemo, useEffect, useRef, useState, useCallback } from "react";

function MyList({ data, onClick }) {
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <>
      <button
        onClick={() => {
          alert(`Current render count is ${renderCount.current}`);
        }}
        className="button is-danger"
      >
        Show render count
      </button>
      {data.map((num) => {
        return (
          <div
            onClick={() => {
              onClick(num);
            }}
            className="tile is-ancestor"
            key={`tile-${num}`}
          >
            <div className="tile is-vertical is-8">
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <article className="tile is-child notification is-primary">
                    <p className="title">Tile #{num + 1}</p>
                    <p className="subtitle">A good num</p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

const MemoMyList = memo(MyList);

function UseCallbackDemo() {
  const data = useMemo(() => Array.from({ length: 20 }, (x, i) => i), []);
  const [count, setCount] = useState(0);

  const onClick = useCallback((num) => {
    alert(`This is your number: ${num}`);
  }, []);

  return (
    <>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
        className="button is-warning"
      >
        Trigger Rerender {count}
      </button>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <MemoMyList data={data} onClick={onClick} />;
    </>
  );
}

export default UseCallbackDemo;
