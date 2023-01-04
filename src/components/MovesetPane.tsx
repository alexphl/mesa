const MovesetPane = (props: {pos: number}) => {
	const stackPos = props.pos;

	return (
		<div className="containter h-fit w-screen max-w-2xl xl:max-w-3xl shadow-xl sm:rounded-2xl bg-zinc-900">
				<div className="z-1 sticky top-0 grid h-4 grid-cols-[20%_1fr_20%] grid-rows-1 bg-white/[0.1] px-3 py-6 backdrop-blur-2xl hover:bg-zinc-900 hover:backdrop-filter-none sm:rounded-t-2xl">
					{/*              <ChartModeListbox
                selected={Chart.mode}
                chartController={[charts, setCharts]}
                id={Chart.id}
                cleanupFunc={clearChartStorage}
              />
              <div className="font-medium text-center self-center text-sm">
                {Chart.id === 69
                  ? "Another chart. Thrilling."
                  : "Chart " + Chart.id}
              </div>
              <button
                className="bg-white/[0.06] hover:bg-rose-400/[0.6] transition-all text-zinc-300 hover:text-zinc-900 p-1 rounded-lg justify-self-end self-center"
                onClick={() => removeChart(Chart.id)}
              >
                <XIcon className="w-8 h-4" />
              </button>*/}
				</div>
				<div className="-mt-1 h-[300px] max-h-[85vh] px-3 pb-1.5 sm:h-[380px] sm:px-4">
					<p></p>
				</div>
			</div>
	);
};

export default MovesetPane;
