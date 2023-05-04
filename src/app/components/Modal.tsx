"use client";
import { useState, useEffect } from "react";

interface Props {
  btnText:string
  children: React.ReactNode
  center?: boolean
  className?: string
}

export default function Modal({ btnText, children, center = false, className }: Props) {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<button
				className={`btn text-black ${
					center ? "block mx-auto" : ""
				} ${className}`}
				type="button"
				onClick={() => setShowModal(true)}
			>
				{btnText}
			</button>
			{showModal ? (
				<>
					<div
						className="relative z-10"
						aria-labelledby="modal-title"
						role="dialog"
						aria-modal="true"
					>
						<div className="fixed inset-0 bg-dusk bg-opacity-75 transition-opacity"></div>

						<div className="fixed inset-0 z-10 overflow-y-auto">
							<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
								<div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all md:m-8 max-w-[800px] w-full">
                  <button
                    className="p-2 mr-2 !text-gray absolute right-0 z-50 text-3xl"
                    onClick={() => setShowModal(false)}
                    style={{ color: "#333333" }}
                  >
                    ×
                  </button>
									<div className="bg-white px-4 pt-4 mt-10">
										{children}
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			) : null}
		</>
	);
}
