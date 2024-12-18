import { useEffect } from "react";
import { dataTeam } from "../../../data/OurTeamData";
import { CardOurTeamProfil } from "../../elements/CardOurTeamProfil";

/* eslint-disable react/prop-types */
export function OurTeamModal({ isOpen, setIsOpen }) {
    useEffect(() => {
        // Mencegah scroll saat modal terbuka
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // Membersihkan overflow saat modal ditutup
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center h-dvh w-full z-50"
            aria-hidden={!isOpen} // Menandakan bahwa konten lain disembunyikan saat modal terbuka
        >
            <div className="bg-white rounded-lg shadow-lg xl:w-[55rem] xl:h-[40rem] p-6 relative">
                <h2 className="text-xl font-bold mb-4">Kelompok SBP</h2>
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                    ✖
                </button>

                <div className="flex flex-wrap justify-center gap-10">
                    {dataTeam.map((mem, i) => (
                        <CardOurTeamProfil
                            key={i}
                            name={mem.name}
                            npm={mem.npm}
                            img={mem.img}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
